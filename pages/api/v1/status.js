function status(request, response) {
  response.status(200).json({ chave: "GALO" });
}

export default status;
