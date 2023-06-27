import fs from "fs";
const actions = {
  saveSimple: async ({ request }) => {
    const data = await request.formData();
    const { id, customer_name, date, balance, paid, total, items, userId } = JSON.parse(
      data.get("invoice")
    );
    let message = "";
    let url = "";
    const invoice = {
      lastUpdatedAt: (/* @__PURE__ */ new Date()).toLocaleString(),
      customer_name,
      id,
      date,
      items,
      balance: parseFloat(balance),
      paid: parseFloat(paid),
      total: parseFloat(total)
    };
    let preInv;
    let filePath = `./src/lib/${userId}-invoice.json`;
    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        if (fileContent.trim() === "") {
          preInv = [];
        } else {
          preInv = JSON.parse(fileContent);
        }
      } else {
        preInv = [];
      }
      let inv = [...preInv, invoice];
      fs.writeFileSync(`./src/lib/${userId}-invoice.json`, JSON.stringify(inv), "utf-8");
      console.log("Invoice saved successfully");
      message = "Invoice Saved Successfully";
      url = `/invoices/${id}`;
      return {
        success: true,
        message,
        url
      };
    } catch (error) {
      console.log("Error: ", error);
      message = "Invoice Not Saved";
      preInv = [];
      return { message };
    }
  }
};
export {
  actions
};
