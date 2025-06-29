<?php
$doc = new DOMDocument();
$doc->load("products.xml");
if (!$doc->schemaValidate('products-schema.xsd')) {
    echo "Invalid xml document";
    exit;
}
header('Content-Type: application/xml');
echo $doc->saveXML();
