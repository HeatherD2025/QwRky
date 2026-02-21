export const handler = async (event) => {
  try {
    const { language = "en", category } = event.queryStringParameters || {};

    const url = new URL("https://api.currentsapi.services/v1/search");

    if (language) url.searchParams.set("language", language);
    if (category) url.searchParams.set("category", category);

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: process.env.CURRENTS_API_KEY,
      },
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Currents API function error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Currents news" }),
    };
  }
};
