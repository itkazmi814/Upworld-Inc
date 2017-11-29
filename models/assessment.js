module.exports = (sequelize, DataTypes) => {
	var Assessment = sequelize.define(
		"Assessment",
		{
			assessmentName: {
				type: DataTypes.INTEGER,
				allowNull: false
			},

			value: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			timestamps: true
		}
	);

	Assessment.associate = models => {
		Assessment.belongsTo(models.Person, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Assessment;
};
