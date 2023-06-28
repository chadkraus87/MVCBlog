const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const blog of blogData) {
      const createdBlog = await Blog.create({
        ...blog,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });

      const commentsForBlog = commentData.filter(
        (comment) => comment.blog_id === blog.id
      );

      for (const comment of commentsForBlog) {
        console.log('Comment Object:', comment);

        await Comment.create({
          ...comment,
          user_id: users[Math.floor(Math.random() * users.length)].id,
          blog_id: createdBlog.id,
        });
      }
    }

    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
