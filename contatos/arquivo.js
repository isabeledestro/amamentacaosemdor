// api/enviarLead.js
export default async function handler(req, res) {
const { nome, telefone, email } = req.body;

const notionToken = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
    "Authorization": `Bearer ${notionToken}`,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28"
    },
    body: JSON.stringify({
    parent: { database_id: databaseId },
    properties: {
        "Nome": { title: [{ text: { content: nome } }] },
        "Telefone": { rich_text: [{ text: { content: telefone } }] },
        "Email": { email: email }
    }
    })
});

if (response.ok) {
    res.status(200).json({ message: "Lead enviado com sucesso!" });
} else {
    const error = await response.text();
    res.status(500).json({ message: "Erro ao enviar lead", error });
}
}