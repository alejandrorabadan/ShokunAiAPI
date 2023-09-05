import Replicate from "replicate";

const replicate = new Replicate({
  auth: "r8_XGiF1xoD290nvB2IX3p1Anry64TfODu3cVTss",
});

const output = await replicate.run(
  "replicate/llama-2-70b-chat:2796ee9483c3fd7aa2e171d38f4ca12251a30609463dcfd4cd76703f22e96cdf",
  {
    input: {
      prompt: "Hola"
    }
  }
);
console.log(output.join(" "));