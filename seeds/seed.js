const sequelize = require('../database/connection');
const {users, userscomments, news} = require('../models');
const usersData = require('./usersData.json');
const userscommentsData = require('./userscommentsData.json');
const newsData = require('./newsDATA.json')
const seedDatabase = async () =>{
    await sequelize.sync({
        force: true
    });
    const users = await usersData.bulkCreate(userData,{
        individualHooks: true,
        returning: true,
    });
    for (const news of newsData){
        await news.create({
            ...news,
            users_id: users[Math.floor(Math.random()*users.lenght)].id,
        });
    }
    process.exit(0);
};
seedDatabase();
