import { Octokit } from "octkit";
//const uuid = crypto.randomUUID()
//window.alert(uuid)
const octokit = new Octokit({auth: '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'})

async function updateGitHubFile(owner, repo, path, message, content) {
    let sha;
    try {
        const {data: fileData } = await octokit.rest.repos.getContent({owner, repo, path});
        sha = fileData.sha;
    }
    catch (error) {
        console.log("File not found, creating a new one.")
    }

    await octokit.rest.repos.createOrUpdateFileContents({
        owner,
        repo,
        path,
        message,
        content: btoa(content),
        sha,
    });
    console.log(`File ${path} updated successfully!`);
}

function button_click(name) {
    const uuid = crypto.randomUUID()
    if(name.value == "Name"){
        name.value = "Error please enter your name"
        window.alert(name.value)
    }

    else {
        window.alert(name.value + " " + uuid);
        const log_content = name.value + "--" + uuid
        updateGitHubFile('RichWithSource','phone_mac_address','RichWithSource/phone_mac_address/list_name.txt','Text Update',log_content)
    }
    
}




