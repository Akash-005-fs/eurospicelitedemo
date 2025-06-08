const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// Add a .nojekyll file to avoid GitHub ignoring files
const nojekyllPath = path.join(__dirname, '..', 'build', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');

ghpages.publish('build', {
  dotfiles: true,
  branch: 'gh-pages',
  message: 'Deploy from script',
  user: {
    name: 'Your Name',
    email: 'your-email@example.com'
  }
}, function (err) {
  if (err) {
    console.error('Deployment error:', err);
  } else {
    console.log('✅ Deployed successfully!');
  }
});
