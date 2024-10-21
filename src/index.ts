import { ponder } from "@/generated";

ponder.on("DlnSourceArbitrum:CreatedOrder", async (event) => {
    console.log(event);
});
