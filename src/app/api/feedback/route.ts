import { headers } from "next/headers"
import { getQueries, deleteQuery, insertQuery, updateStatus } from "@/utils/queryManager"
import { authorizeAPIRequest, AuthorizeResponse } from "@/middlewares/api"

export async function GET() {
    try {
        const { success, error }: AuthorizeResponse = await authorizeAPIRequest();
        if (!success) {
            return Response.json({ error }, { status: 401 })
        } else {
            const response = await getQueries()
            if (!response.success) {
                return Response.json({ error: response.error }, { status: 400 })
            } else {
                return Response.json({ data: response.data }, { status: 200 })
            }
        }
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const { success, error }: AuthorizeResponse = await authorizeAPIRequest();
        if (!success) {
            return Response.json({ error }, { status: 401 })
        } else {
            const body = await request.json()
            const response = await insertQuery({
                name: body.name,
                email: body.email,
                phone: body.phone,
                query: body.query
            })
            if (!response.success) {
                return Response.json({ error: response.error }, { status: 400 })
            } else {
                return Response.json({ data: response.data }, { status: 201 })
            }
        }
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const { success, error }: AuthorizeResponse = await authorizeAPIRequest();
        if (!success) {
            return Response.json({ error }, { status: 401 })
        } else {
            const body = await request.json()
            const response = await deleteQuery(body.id)
            if (!response.success) {
                return Response.json({ error: response.error }, { status: 400 })
            } else {
                return Response.json({ message: "Query deleted successfully" }, { status: 200 })
            }
        }
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

export async function PUT(request: Request) {
    try {
        const { success, error }: AuthorizeResponse = await authorizeAPIRequest();
        if (!success) {
            return Response.json({ error }, { status: 401 })
        } else {
            const body = await request.json()
            const response = await updateStatus(body.id, body.status)
            if (!response.success) {
                return Response.json({ error: response.error }, { status: 400 })
            } else {
                return Response.json({ message: "Status updated successfully" }, { status: 200 })
            }
        }
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}