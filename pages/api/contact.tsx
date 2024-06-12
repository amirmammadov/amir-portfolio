import { NextApiRequest, NextApiResponse } from "next";

import { mailOptions, transporter } from "@/config/nodemailer";

import { createHTMLTemplate } from "@/constant/htmlTemp";

interface StateValues {
  [key: string]: string;
  name: string;
  mail: string;
  subject: string;
  message: string;
}

const CONTACT_MESSAGE_FIELDS: StateValues = {
  name: "Name",
  mail: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data: StateValues) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    "",
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: createHTMLTemplate(htmlData),
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    if (!data || !data.name || !data.mail || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });

      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "Bad request" });
};

export default handler;
