module.exports = (sequelize, DataTypes) => {
	var Assessment = sequelize.define(
		"Assessment",
		{
			assessmentName: {
				type: DataTypes.STRING,
				allowNull: false
			},

			value: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	TodoItem.associate = (models) => {
		TodoItem.belongsTo(models.Todo, {
		  foreignKey: 'todoId',
		  onDelete: 'CASCADE',
		});
	  };	
	
	  Assessment.associate = models => {
		Assessment.belongsTo(models.Person, {
			foreignKey: 'studentId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	return Assessment;
};
