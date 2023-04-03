// async function getLastCommitDate(username) {
//     import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
//     const octokit = new Octokit({
//         auth: 'PROMISE_TOKEN'
//     });
//
//     const response = await octokit.request('GET /users/{username}/events/public', {
//         username,
//         headers: {
//             'X-GitHub-Api-Version': '2022-11-28'
//         }
//     });
//     const events = response.data;
//     const lastPushEvent = events.find(event => event.type === "PushEvent");
//     const lastCommitDate = new Date(lastPushEvent.created_at);
//     return lastCommitDate.toDateString();
// }
//
// const githubPromise = getLastCommitDate('TamicaSimon');
// const bitbucketPromise = Promise.resolve("No data available");
//
// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(milliseconds);
        }, milliseconds);
    });
}
wait(2000).then(milliseconds => {
    console.log(`Waited ${milliseconds} milliseconds`);
});

