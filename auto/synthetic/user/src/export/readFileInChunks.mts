import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
import type {ReadFileInChunksResult} from "#~synthetic/async.sync/export/ReadFileInChunksResult.d.mts"
// ^^^--- types needed for implementation

import {readFileInChunksFactory as factory} from "#~synthetic/user/export/readFileInChunksFactory.mts"

const fn = factory(createContext())

export async function readFileInChunks(file_path: string, chunk_size: number) : Promise<ReadFileInChunksResult> {
	return await fn(file_path, chunk_size)
}