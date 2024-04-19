const copyToClipboard = (username, setCopyConfirmation) => {
    navigator.clipboard.writeText(username);
    setCopyConfirmation(true);
    setTimeout(() => {
        setCopyConfirmation(false);
    }, 1500);
}

export default copyToClipboard;