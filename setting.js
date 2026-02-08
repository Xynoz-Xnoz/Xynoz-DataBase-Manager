const CONFIG = {
    TOKEN: "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", 
    USER: "Xynoz-Xnoz",
    REPO: "DB-IMAGINATION-TRASHER",
    DB_FILE: "db.json",     
    USER_FILE: "user.json"   
};

function getApiUrl(filename) {
    return `https://api.github.com/repos/${CONFIG.USER}/${CONFIG.REPO}/contents/${filename}`;
}
