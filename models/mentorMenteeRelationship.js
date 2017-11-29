module.exports = (sequelize, DataTypes) => {
	var MentorMenteeRelationship = sequelize.define(
		"MentorMenteeRelationship",
		{},
		{
			timestamps: true
		}
	);

	MentorMenteeRelationship.associate = models => {
		MentorMenteeRelationship.belongsTo(models.Person, {
			foreignKey: {
				field: "Mentee",
				allowNull: false
			}
		});

		MentorMenteeRelationship.belongsTo(models.Person, {
			foreignKey: {
				field: "Mentor",
				allowNull: false
			}
		});
	};

	return MentorMenteeRelationship;
};
