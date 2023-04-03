const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const usersThreeLanguages = users.filter(user => user.languages.length >= 3);

console.log(usersThreeLanguages);

const userEmails = users.map(user => user.email);

console.log(userEmails);

const totalYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

const averageYearsOfExperience = totalYearsOfExperience / users.length;

console.log(totalYearsOfExperience);
console.log(averageYearsOfExperience);

const longestEmail = users.reduce((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
}, '');

console.log(longestEmail);

const allUserNames = users.reduce((names, user) => {
    return names === '' ? user.name : names + ', ' + user.name;
}, '');

console.log(allUserNames);

