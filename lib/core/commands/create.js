require('commander')
  .command('create')
  .description('Create Vue or React templates at your decision, chose vue or react')
  .arguments('<type>', 'Chosing vue or react')
  .action(action)

function action(type) {
  if (!['vue', 'react'].includes(type)) {
    console.log(`The ${type} is not vue or react, please enter vue or react.`)
    return 
  }
  console.log(`you have chosen ${type}`)
}