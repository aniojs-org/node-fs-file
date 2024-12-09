import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {implementation as writeAtomicFile} from "#~synthetic/async.sync/writeAtomicFile.mts"
//>import {implementation as writeAtomicFile} from "#~synthetic/async.sync/writeAtomicFileSync.mts"

import {randomIdentifierSync} from "@aniojs/random-ident"

export type AnioJsDependencies = {
	randomIdentifierSync: typeof randomIdentifierSync
}

export async function implementation(
//>export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	dependencies: AnioJsDependencies,
	file_path: string,
	data: any,
	options?: {
		pretty?: boolean,
		disable_new_line_at_eof?: boolean,
		create_parents?: boolean
	}
) : Promise<number> {
//>) : number {
	const context = useContext(wrapped_context, 0)

	context.log.trace(`writing atomic json file at '${file_path}'`)

	let data_str = options?.pretty === true ? JSON.stringify(data, null, 4) : JSON.stringify(data)

	//
	// in unix it is common, if not required, that text files
	// end with a new line
	//
	if (options?.disable_new_line_at_eof !== true) {
		data_str += "\n"
	}

	return await writeAtomicFile(
//>	return writeAtomicFile(
		wrapped_context,
		dependencies,
		file_path,
		data_str,
		{
			create_parents: options?.create_parents === true
		}
	)
}