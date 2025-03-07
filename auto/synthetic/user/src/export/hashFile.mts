import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'BufferEncoding' at the top level */
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {hashFileFactory as factory} from "#~synthetic/user/export/hashFileFactory.mts"

export async function hashFile(file_path: string, algo: string, hash_encoding?: BufferEncoding) : Promise<string> {
	const __fnImplementation = factory(createContext())

	return await __fnImplementation(file_path, algo, hash_encoding)
}
