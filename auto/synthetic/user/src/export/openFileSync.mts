import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'ReturnType' at the top level */
import {openFile as x} from "@aniojs-private/node-async-sync-fs/sync"
// ^^^--- types needed for implementation

import {openFileSyncFactory as factory} from "#~synthetic/user/export/openFileSyncFactory.mts"

export function openFileSync(path: string, flags?: string, mode?: number) : ReturnType<typeof x> {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(path, flags, mode)
}
