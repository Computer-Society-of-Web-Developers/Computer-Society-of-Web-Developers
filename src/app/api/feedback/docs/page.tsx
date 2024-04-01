export default function page() {
    return (
        <>
            <div className="max-w-4xl mx-auto mt-10 align-middle justify-center flex flex-col">
                <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
                <h3><a className="text-blue-500" href={"/api"}>Documentation List</a></h3>

                <div className="bg-gray-300 shadow-md rounded-md p-4 mb-4 mt-4">
                    <h2 className="text-xl font-bold mb-2">GET Method</h2>
                    <p className="text-gray-600 mb-2">Endpoint: /api/feedback</p>
                    <p className="text-gray-600 mb-2">Description: Retrieves all user queries from the database.</p>
                    <p className="text-gray-600 mb-2">Request Method: GET</p>
                    <p className="text-gray-600 mb-2">Authorization: Requires authentication token</p>
                    <p className="text-gray-600 mb-2">Response: JSON object containing data or error message</p>
                </div>

                <div className="bg-gray-300 shadow-md rounded-md p-4 mb-4 mt-4">
                    <h2 className="text-xl font-bold mb-2">POST Method</h2>
                    <p className="text-gray-600 mb-2">Endpoint: /api/feedback</p>
                    <p className="text-gray-600 mb-2">Description: Inserts a new user query into the database.</p>
                    <p className="text-gray-600 mb-2">Request Method: POST</p>
                    <p className="text-gray-600 mb-2">Authorization: Requires authentication token</p>
                    <p className="text-gray-600 mb-2">Request Body: JSON object containing name, email, phone, and query</p>
                    <p className="text-gray-600 mb-2">Response: JSON object containing data or error message</p>
                </div>

                <div className="bg-gray-300 shadow-md rounded-md p-4 mb-4 mt-4">
                    <h2 className="text-xl font-bold mb-2">DELETE Method</h2>
                    <p className="text-gray-600 mb-2">Endpoint: /api/feedback</p>
                    <p className="text-gray-600 mb-2">Description: Deletes a user query based on its ID.</p>
                    <p className="text-gray-600 mb-2">Request Method: DELETE</p>
                    <p className="text-gray-600 mb-2">Authorization: Requires authentication token</p>
                    <p className="text-gray-600 mb-2">Request Body: JSON object containing ID of the query to delete</p>
                    <p className="text-gray-600 mb-2">Response: JSON object containing success message or error message</p>
                </div>

                <div className="bg-gray-300 shadow-md rounded-md p-4 mb-4 mt-4">
                    <h2 className="text-xl font-bold mb-2">PUT Method</h2>
                    <p className="text-gray-600 mb-2">Endpoint: /api/feedback</p>
                    <p className="text-gray-600 mb-2">Description: Updates the status of a user query based on its ID.</p>
                    <p className="text-gray-600 mb-2">Request Method: PUT</p>
                    <p className="text-gray-600 mb-2">Authorization: Requires authentication token</p>
                    <p className="text-gray-600 mb-2">Request Body: JSON object containing ID and new status</p>
                    <p className="text-gray-600 mb-2">Response: JSON object containing success message or error message</p>
                </div>
            </div>
        </>
    )
}
