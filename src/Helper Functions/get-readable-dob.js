const getReadableDOB = numericDate => {
    const [month, day, year] = numericDate.split('/');
    const formattingDate = new Date(year, month - 1, day);
    return formattingDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default getReadableDOB;