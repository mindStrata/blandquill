### **Minimal Documentation: Pull a Branch from GitHub**
# Add new line
# Another line
#### **1. List All Remote Branches**:

To see all the available branches in the remote repository, use:

```bash
git branch -r
```

#### **2. Create and Switch to a Remote Branch (if it doesn't exist locally)**:

If the branch does not exist locally, create and switch to it using:

```bash
git checkout -b branch_name origin/branch_name
```

#### **3. Pull the Latest Changes**:

After switching to the desired branch, pull the latest changes from the remote repository:

```bash
git pull origin branch_name
```
