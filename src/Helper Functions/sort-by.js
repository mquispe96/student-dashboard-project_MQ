const sortBy = (showBy, allProfiles, objKeys) => {
    let sortedKeys = undefined;
    if(showBy.sortBy === 'default'){
        sortedKeys = objKeys;
      }
      else if(showBy.sortBy === 'a-b'){
        sortedKeys = objKeys.sort((a, b) => allProfiles[a].codewars.current.total - allProfiles[b].codewars.current.total)
      }
      else if(showBy.sortBy === 'b-a'){
        sortedKeys = objKeys.sort((a, b) => allProfiles[b].codewars.current.total - allProfiles[a].codewars.current.total)
      }
      else if(showBy.sortBy === 'a-z'){
        sortedKeys = objKeys.sort((a, b) => {
          const aName = `${allProfiles[a].names.preferredName} ${allProfiles[a].names.middleName} ${allProfiles[a].names.surname}`;
          const bName = `${allProfiles[b].names.preferredName} ${allProfiles[b].names.middleName} ${allProfiles[b].names.surname}`;
          return aName.localeCompare(bName);
        })
      }
      else {
        sortedKeys = objKeys.sort((a, b) => {
          const aName = `${allProfiles[a].names.preferredName} ${allProfiles[a].names.middleName} ${allProfiles[a].names.surname}`;
          const bName = `${allProfiles[b].names.preferredName} ${allProfiles[b].names.middleName} ${allProfiles[b].names.surname}`;
          return bName.localeCompare(aName);
        })
      }
      return sortedKeys
}

export default sortBy;