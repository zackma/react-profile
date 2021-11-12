import profileData from '../../public/data/profile/profile.json'

export async function loadProfileData() {
    return await JSON.parse(JSON.stringify(profileData))
}

export function getAllRootDetails() {
    const allData = JSON.parse(JSON.stringify(profileData))
    let details = []
    for (let obj in allData['cn']['details']) {
        details.push(obj)
    }
    
    return details.map(detail => {
        return {
            params: {
                id: detail
            }
        }
    })
}
