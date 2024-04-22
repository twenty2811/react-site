react-site, commit

TIPS:
- Do not git clone with https, use git protocal instead, this will ensure your local commit does not require password and name when ssh is configured

```
- github actions, deployment failed solutions: 

// https://stackoverflow.com/questions/76937061/branch-master-is-not-allowed-to-deploy-to-github-pages-due-to-environment-prot

Sounds like that your environment has some protection set up. You can try the following:

Go to you repository Settings.
Click on Environments.
Select your environment github-pages.
Next to Deployment branches select Selected branches from the dropdown.
Click on Add deployment branch rule.
Enter the pattern main.
This should allow deployments from the main branch to your github-pages environment.
```

# TODO
- router, why profile does not take effect?
- using css and redesign the first page
- use browser router, it seems that github now support browser router
- ...