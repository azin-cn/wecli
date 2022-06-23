require('commander')
  .command('add-comp')
  .description('Create Vue or React component at your decision')
  .arguments('<type>', 'Chosing vue or react')
  .option('-d --dest <dest>', 'you can assign destination by -d or --dest')
  .action(action)

function action(type, options) {
  if (!['vue', 'react'].includes(type)) {
    console.log(`The ${type} is not vue or react, please enter vue or react.`)
    return 
  }
  console.log(`you have chosen ${type}, the destination is '${options.dest}'`)
}