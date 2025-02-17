import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import type {ReadFileInChunksResult} from "#~synthetic/async.sync/export/ReadFileInChunksResult.d.mts"
//>import type {ReadFileInChunksSyncResult as ReadFileInChunksResult} from "#~synthetic/async.sync/export/ReadFileInChunksSyncResult.d.mts"

import {openFile} from "@aniojs-private/node-async-sync-fs/async"
//>import {openFile} from "@aniojs-private/node-async-sync-fs/sync"

export async function implementation(
//>export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	file_path: string,
	chunk_size: number
) : Promise<ReadFileInChunksResult> {
//>) : ReadFileInChunksResult {
	const context = useContext(wrapped_context, 0)

	context.log.debug(`reading file '${file_path}' with chunk size '${chunk_size}'.`)

	const file = await openFile(file_path, "r")
//>	const file = openFile(file_path, "r")

	let closed = false

	return {
		async readNextChunk() {
//>		readNextChunk() {
			if (closed) return false

			let chunk_buffer = Buffer.alloc(chunk_size)

			const bytes_read = await file.read(chunk_buffer)
//>			const bytes_read = file.read(chunk_buffer)

			context.log.trace(
				`read ${bytes_read} bytes from file ${file_path}`
			)

			if (!bytes_read) {
				if (!closed) await file.close()
//>				if (!closed) file.close()

				closed = true

				return false
			}

			return chunk_buffer.subarray(0, bytes_read)
		},

		async close() {
//>		close() {
			if (closed) return

			await file.close()
//>			file.close()

			closed = true
		}
	}
}
