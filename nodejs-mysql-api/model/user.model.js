module.exports = (DataTypes, sequelize) => {
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN, defaultValue: '0'
        },
    })

    return User
}