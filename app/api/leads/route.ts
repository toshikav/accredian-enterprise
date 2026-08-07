import { NextResponse } from "next/server";

interface Lead {
  name: string;
  email: string;
  company: string;
  phone?: string;
  requirement: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      phone,
      requirement,
    } = body as Lead;

    if (!name || !email || !company || !requirement) {
      return NextResponse.json(
        {
          message:
            "Name, email, company, and requirement are required.",
        },
        { status: 400 }
      );
    }

    // Mock storage for the assignment.
    // In production, this could be replaced with
    // PostgreSQL, MongoDB, Supabase, etc.
    const lead = {
      id: crypto.randomUUID(),
      name,
      email,
      company,
      phone: phone || "",
      requirement,
      createdAt: new Date().toISOString(),
    };

    console.log("New enterprise lead:", lead);

    return NextResponse.json(
      {
        message: "Lead submitted successfully.",
        lead: {
          id: lead.id,
          name: lead.name,
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        message: "Invalid request.",
      },
      { status: 400 }
    );
  }
}