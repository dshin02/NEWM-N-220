## Assignment 1: Git Readme

## Websites vs Web Applications

The canvas page explained the key differences between websites and web applications, focusing on their purposes, interactions, and examples.

Websites are designed to share information and are simple, focusing on browsing and reading content, such as news sites or blogs. In contrast, web apps are interactive and task-oriented, allowing people to perform actions like editing documents or shopping online. Simply put, websites inform, while web apps engage.

### Websites
Websites provide information for users to view or browse. They are simple and focus on delivering content.

### Key Features
- **Purpose:** Share information
- **Interaction:** Limited (viewing only)
- **Examples:**
  - [BBC News](https://www.bbc.com)
  - [TechCrunch](https://techcrunch.com)
  - [Luddy Indianapolis](https://luddy.iupui.edu)

### Web Applications
Web apps are interactive tools designed for tasks and personalized experiences. They are more complex and dynamic.

### Key Features
- **Purpose:** Task-oriented, personalized
- **Interaction:** High (editing, managing, interacting)
- **Examples:**
  - [Google Docs](https://docs.google.com)
  - [Amazon](https://www.amazon.com)
  - [LinkedIn](https://www.linkedin.com)


## VS Code & Extensions

The canvas page explained how to set up Visual Studio Code (VS Code) for local development.

To set up Visual Studio Code for local development, begin by downloading and installing it from the official website. Once installed, add essential extensions like Prettier, Live Server, and Auto Rename Tag by clicking the "Extensions" icon in the left menu, searching for these tools, and installing them. Extensions such as Code Spell Checker or vscode-pets are not required for this course.

### VS Code Installation
We started by downloading and installing [Visual Studio Code](https://code.visualstudio.com/).

#### VS Code Extensions
Then inside VS Code we installed extensions that are required for this course.
These are the extensions:
- Prettier
- Live Server
- Auto Rename Tag

#### Extensions Not Required
Although these extensions are not required for this course, they can help simplify our work and make it decorative on VS Code.
These are the extensions:
- Code Spell Checker
- vscode-pets

To install the extensions:
1. Click the **Extensions** icon on the left menu.
2. Search for the required extensions and click **Install**.

## Version Control, Git, & GitHub

These two canvas pages explained how to set up Git and GitHub for version control and showed how to use common  Git commands to manage our codes.

To start using Git and GitHub, first install Git on your computer. Windows users can download the installer, while Mac users can use Homebrew with the command brew install git. Check the installation by typing git --version in the terminal. Next, set up Git by adding your name and email with git config --global user.name "Your Name" and git config --global user.email "your.email@example.com". Once everything is set up, you can save your changes using git commit, upload them to GitHub with git push, and download updates with git pull. To publish your work, create a GitHub repository, link it with git remote add origin, and push your changes using git push --set-upstream origin main. These steps help you keep your code organized and synced. If you face errors, like syncing issues, commands such as git config http.postBuffer 524288000 can fix them.

### GitHub Signup
[Create a GitHub account](https://github.com/)  

### Install Git

#### Windows
1. [Download Git](https://git-scm.com/downloads) and install it.

#### Mac
1. Install Homebrew:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Install Git:
   ```
   brew install git
   ```

### Set Up Git in VS Code
1. Open the terminal in VS Code.
2. Set your name and email:
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
### Common Git Commands

#### Save Changes
Add a message to your changes:
```
git commit -m "Your message"
```

#### Publish Your Work
1. Create a GitHub repository and copy its HTTPS link.
2. Connect and upload:
   ```
   git remote add origin https://github.com/username/repo.git
   git push --set-upstream origin main
   ```

#### Sync Code
Download and upload changes:
```
git pull
git push
```

### Troubleshooting

#### Sync Error
If you see:
```bash
error: RPC failed; HTTP 400
```
Fix it:
```bash
git config http.postBuffer 524288000
```
If needed, reset your name and email:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```



## Markdown & Documentation

The canvas page explains what Markdown is, its basic syntax rules, and why it is important.     

Markdown is a simple way to format text using special symbols like # for headings, - for lists, and []() for links. It allows you to create clean, structured documents without complex HTML. Common formatting includes bold (**bold**), italics (_italic_), and links ([Google](https://www.google.com)). Markdown is widely used on platforms like GitHub and Reddit because it's easy to use and makes content look good without extra effort.

### What is Markdown?
Markdown is a simple language to format text for conversion to HTML. It uses symbols like `#` for headings, `**` for bold, and `*` for italics to make text easy to read and style without complex HTML.

### Why is Markdown Important?
Markdown is widely used for documentation, blogs, and forums due to its simplicity and human-readable syntax. Many platforms like GitHub and Reddit support it for quick and effective content creation.

### Markdown Syntax

#### Headings
Use `#` for headings:

```markdown
# Heading 1
## Heading 2
### Heading 3
```

#### Bold and Italics
**Bold**: `**text**`  
_Italic_: `_text_`

#### Lists
- Unordered: `- item`  
1. Ordered: `1. item`

#### Links
```
[Link text](https://example.com)
```

#### Images
```
![Alt text](https://picsum.photos/100/100)
```

#### Code
Inline Code: `` Use `printf()` to output text. `` 
Code Block: ```markdown```

#### Tables
```
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

#### Blockquotes
Use `>`:
```
> This is a blockquote.
```

### Horizontal Rules
Use `---`, `***`, or `___`:
```
---
```