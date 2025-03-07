import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
/* couldn't find a user defined type named 'ReturnType' at the top level */
import {openFile as x} from "@aniojs-private/node-async-sync-fs/async"
// ^^^--- types needed for implementation

import {openFileFactory as factory} from "#~synthetic/user/export/openFileFactory.mts"

export async function openFile(path: string, flags?: string, mode?: number) : Promise<ReturnType<typeof x>> {
	const __fnImplementation = factory(createContext())

	return await __fnImplementation(path, flags, mode)
}
