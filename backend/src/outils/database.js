import {
    writeFileSync
} from 'fs'
import Donneurs from '../../database/db.json'


export function get_Donneurs() {
    return Donneurs
}

export const get_Donneurs = id => {
    const podcast = Donneurs.find(Donneurs => Donneurs.id == id)

    return Donneurs
}


export function add_Donneurs(Donneurs) {
    let new_Donneurs = [
        ...Donneurs,
        {
            ...Donneurs,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_Donneurs)

    writeFileSync("database/db.json", new_data)

    return new_Donneurs
}

    const new_data = JSON.stringify(Donneurs)

    writeFileSync("database/db.json", new_data)

    return Donneurs
}

export function delete_Donneurs(id) {
    let index = Donneurs.findIndex(Donneurs => Donneurs.id == id)

    Donneurs.splice(index, 1)
    delete_hosts(id)
    const new_data = JSON.stringify(Donneurs)

    writeFileSync("database/db.json", new_data)

    return podcasts
}

