import {createContext} from "@fourtune/realm-js/v0/runtime"

import {writeAtomicFileJSONSyncFactory as factory} from "#~synthetic/user/export/writeAtomicFileJSONSyncFactory.mts"

let __fnImplementation: any = null

export function writeAtomicFileJSONSync(file_path: string, data: any, options?: {
		pretty?: boolean,
		disableNewLineAtEOF?: boolean
		createParents?: boolean
		parentsMode?: number
		mode?: number
	}) : number {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(file_path, data, options)
}
