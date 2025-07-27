<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Bee Driver - Plan du site</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          :root {
            --primary:rgb(25, 116, 253);
            --primary-dark:rgb(25, 116, 253);
            --secondary: #1a1a1a;
            --text: #000000;
            --text-light: #4a4a4a;
            --border: #e5e7eb;
            --hover: #f8f8f8;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: var(--text);
            max-width: 75em;
            margin: 0 auto;
            padding: 2em;
            line-height: 1.5;
            background-color: #ffffff;
          }

          h1 {
            color: var(--secondary);
            font-size: 2em;
            margin-bottom: 1.5em;
            text-align: center;
            font-weight: 600;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin: 1em 0;
            background-color: white;
            border-radius: 0.5em;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          th, td {
            padding: 1em;
            text-align: left;
            border-bottom: 1px solid var(--border);
          }

          th {
            background-color: var(--secondary);
            font-weight: 600;
            color: var(--primary);
          }

          tr:hover {
            background-color: var(--hover);
          }

          a {
            color: var(--secondary);
            text-decoration: none;
            transition: color 0.2s ease;
          }

          a:hover {
            color: var(--primary);
            text-decoration: underline;
          }

          .priority {
            font-weight: 600;
            color: var(--primary);
          }

          .date {
            color: var(--text-light);
            font-size: 0.9em;
          }

          .changefreq {
            text-transform: capitalize;
            color: var(--secondary);
          }

          @media (max-width: 768px) {
            body {
              padding: 1em;
            }

            table {
              display: block;
              overflow-x: auto;
            }

            th, td {
              padding: 0.75em;
            }
          }
        </style>
      </head>
      <body>
        <h1>Plan du site Bee Driver</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Dernière modification</th>
            <th>Priorité</th>
            <th>Fréquence de changement</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td class="date">
                <xsl:value-of select="sitemap:lastmod"/>
              </td>
              <td class="priority">
                <xsl:value-of select="sitemap:priority"/>
              </td>
              <td class="changefreq">
                <xsl:value-of select="sitemap:changefreq"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 