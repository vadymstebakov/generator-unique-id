var ID = function() {
	return (
		'_' +
		(
			Number(String(Math.random()).slice(2)) +
			Date.now() +
			Math.round(performance.now())
		).toString(36)
	);
};

module.exports = ID;
