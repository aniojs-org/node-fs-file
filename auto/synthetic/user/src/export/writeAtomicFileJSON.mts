import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {writeAtomicFileJSONFactory as factory} from "#~synthetic/user/export/writeAtomicFileJSONFactory.mts"

export async function writeAtomicFileJSON(file_path: string, data: any, options?: {
		pretty?: boolean,
		disableNewLineAtEOF?: boolean
		createParents?: boolean
		parentsMode?: number
		mode?: number
	}) : Promise<number> {
	const __fnImplementation = factory(createContext())

	return await __fnImplementation(file_path, data, options)
}
