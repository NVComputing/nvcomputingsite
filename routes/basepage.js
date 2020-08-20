let showdown = require('showdown');
let path = require('path');

let code =
`\`\`\`java
public class ComputingTeam {
	public static void main(String[] args) {
		School neuqua = new School("NEUQUA VALLEY HIGH SCHOOL");
		ArrayList<String> people = new ArrayList<>(neuqua.getPeople());

		// Find the cool people
		ArrayList<String> computingTeamMembers = people.stream()
			.filter(person -> person.likesCoding && person.likesComputers)
		    .filter(person -> neuqua.getClass("AP Computer Science A").getPeople().contains(person))
		    .collect(Collectors.toList(ArrayList::new));

		System.out.println(computingTeamMembers.contains(neuqua.getPersonByIp(connection.getIPv4()));

		System.out.println("If you understood even " +
		"a tiny bit of this, you should consider " +
		"joining Computing Team! More details below.");
	}
}
\`\`\`
`;

let converter = new showdown.Converter();

let convertedCode = converter.makeHtml(code);

module.exports.set = (app) => {
	app.get('/', (req, res) => {
		res.render('index', {
			titleCode: convertedCode,
			title: 'Neuqua Valley Computing Team',

			homePage: true,
			prism: true,

			titleCode: convertedCode
		});
	})
}
