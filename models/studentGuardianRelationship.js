module.exports = (sequelize, DataTypes) => {
	var StudentGuardianRelationship = sequelize.define(
		"StudentGuardianRelationship",
		{},
		{
			timestamps: true
		}
	);

	StudentGuardianRelationship.associate = models => {
		StudentGuardianRelationship.belongsTo(models.Person, {
			foreignKey: {
				field: "Student",
				allowNull: false
			}
		});

		StudentGuardianRelationship.belongsTo(models.Person, {
			foreignKey: {
				field: "Guardian",
				allowNull: false
			}
		});
	};

	return StudentGuardianRelationship;
};
