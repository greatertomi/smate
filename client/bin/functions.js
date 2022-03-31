const axios = require("axios");
const chalk = require("chalk");

const BASE_URL = 'http://localhost:4000'

const formatIssues = (issues) => {
  const formattedIssues = issues.map((issue, index) => {
    return `${issue.id} | ${issue.title} | ${issue.description}`
  })
  return formattedIssues.join('\n');
}

exports.listIssues = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/issues`);
    console.log('ISSUES:')
    console.log(formatIssues(res.data));
  } catch (err) {
    console.error(err);
  }
}

exports.addIssue = async (title, description) => {
  if (!title || !description) {
    console.log('%s', chalk.green(`2 Action arguments required`));
    return;
  }
  const data = {title, description};
  try {
    await axios.post(`${BASE_URL}/issues`, data);
    console.log('%s', chalk.green(`New Issue created`));
  } catch (err) {
    console.error(err);
  }
}

exports.deleteIssue = async (id) => {
  if (!id) {
    console.log('%s', chalk.green(`1 Action arguments required`));
    return;
  }
  try {
    await axios.delete(`${BASE_URL}/issues/${id}`);
    console.log('%s', chalk.green(`Issue deleted`));
  } catch (err) {
    console.error(err);
  }
}

exports.updateIssue = async (id, title, description) => {
  if (!id) {
    console.log('%s', chalk.green(`1 Action arguments required`));
    return;
  }
  const data = {title, description};
  try {
    await axios.put(`${BASE_URL}/issues/${id}`, data);
    console.log('%s', chalk.green(`Issue updated`));
  } catch (err) {
    console.error(err);
  }
}

