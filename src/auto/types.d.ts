/**
 * @brief Asynchronously hash file.
 * @description
 * Asynchronously calculates the hash of `file_path` using algorithm `algo`.
 * @param file_path File to be hashed.
 * @param algo Hash algorithm to use.
 * @param hash_encoding Encoding of the hash, defaults to `hex`.
 * @return
 * Returns hash in specified encoding `hash_encoding`. The default encoding is `hex`.
 */
export function hashFile(file_path : string, algo : string, hash_encoding? : string) : Promise<string | Buffer>;

/**
 * @brief Synchronously hash file.
 * @description
 * Synchronously calculates the hash of `file_path` using algorithm `algo`.
 * @param file_path File to be hashed.
 * @param algo Hash algorithm to use.
 * @param hash_encoding Encoding of the hash, defaults to `hex`.
 * @return
 * Returns hash in specified encoding `hash_encoding`. The default encoding is `hex`.
 */
export function hashFileSync(file_path : string, algo : string, hash_encoding? : string) : string | Buffer;

declare type AsyncReadFileInChunksObject = {
	/**
	 * @brief Asynchronously reads the next chunk.
	 */
	readNextChunk() : Promise<Buffer>;
	/**
	 * @brief Asynchronously closes the file.
	 */
	close() : Promise<void>;
};

/**
 * @brief Asynchronously read a file in chunks.
 * @description
 * Asynchronously reads the file at `path` with a chunk size of `chunk_size`.
 * @param path The file to be read.
 * @param chunk_size Chunk size in bytes to be used.
 */
export function readFileInChunks(path : string, chunk_size : number) : Promise<AsyncReadFileInChunksObject>

declare type SyncReadFileInChunksObject = {
	/**
	 * @brief Synchronously reads the next chunk.
	 */
	readNextChunk() : Buffer;
	/**
	 * @brief Synchronously closes the file.
	 */
	close() : void;
};

/**
 * @brief Synchronously read a file in chunks.
 * @description
 * Synchronously reads the file at `path` with a chunk size of `chunk_size`.
 * @param path The file to be read.
 * @param chunk_size Chunk size in bytes to be used.
 */
export function readFileInChunksSync(path : string, chunk_size : number) : SyncReadFileInChunksObject

