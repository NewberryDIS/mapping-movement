import { error } from "@sveltejs/kit";
export const prerender = true;
export const trailingSlash = "always";
import { toc } from "$lib/stores";

export async function load({ params, fetch }) {
  let returnData = {};

  try {
    returnData = {
      ...returnData,
    };
    // console.log(url.pathname);
    // if (url.pathname.includes("data")) {
    //   console.log("asdfafsafaf");
    //   const fileName = "data.json";
    //   const datoo = switchGitter("all");
    //   let exportdata = [];
    //   for (let i in datoo) {
    //     // if (datoo[i].metadata) {
    //     //   exportdata.push(datoo[i]);
    //     // }
    //     exportdata.push(datoo[i].metadata);
    //   }
    //   return { exportdata };
    // }

    // getting page data if not /
    if (params.essay) {
      // console.log(params);
      let essay = toc.filter((f) => f.essayslug === params.essay).pop();
      // console.log(essay);
      const essayData = await import(`../content/${essay.essayfn}.md`);
      essay = {
        content: essayData.default,
        meta: essayData.metadata,
      };
      // console.log(essay);
      const dataurl = `/data/${essay.meta.essayno}.json`;
      console.log(essay.meta.essayno);
      let minis = await fetch(dataurl).then((r) => r.json());

      console.log(minis);

      //
      // let paths = switchGitter(essay.meta.essayno);
      //
      // for (const path in paths) {
      //   const file = paths[path];
      //   // if (!("metadata" in file)) {
      //   //   console.log(file);
      //   // }
      //
      //   if (file && typeof file === "object" && "metadata" in file) {
      //     minis.push(paths[path].metadata);
      //   }
      // }
      // minis = minis
      //   .filter((f) => f)
      //   .sort((a, b) => (a.minino > b.minino ? 1 : -1));
      //
      returnData = {
        essay: essay,
        minis: minis,
        ...returnData,
      };
      if (params.mini) {
        // console.log(params.mini);
        let minifn = minis
          .filter((f) => f.minislug === params.mini)
          .pop().minifn;

        const miniData = await import(
          `../content/${essay.meta.essayno}/${minifn}.md`
        );
        const mini = {
          content: miniData.default,
          meta: miniData.metadata,
        };
        // console.log("mini", mini)

        returnData = {
          ...returnData,
          essay: essay,
          mini: mini,
        };
      }
    }
    // console.log("returnData", returnData)
    return returnData;
  } catch (e) {
    console.log(e);
    throw error(404, `We seem to be having some technical difficulties.`);
  }
}

// function switchGitter(val) {
//   console.log(val);
//   let paths;
//   switch (val) {
//     case "mm01":
//       paths = import.meta.glob("/src/content/mm01/*.md", { eager: true });
//       break;
//     case "mm03":
//       paths = import.meta.glob("/src/content/mm03/*.md", { eager: true });
//       break;
//     case "mm05":
//       paths = import.meta.glob("/src/content/mm05/*.md", { eager: true });
//       break;
//     case "mm06":
//       paths = import.meta.glob("/src/content/mm06/*.md", { eager: true });
//       break;
//     case "mm07":
//       paths = import.meta.glob("/src/content/mm07/*.md", { eager: true });
//       break;
//     case "mm08":
//       paths = import.meta.glob("/src/content/mm08/*.md", { eager: true });
//       break;
//     case "mm09":
//       paths = import.meta.glob("/src/content/mm09/*.md", { eager: true });
//       break;
//     case "mm12":
//       paths = import.meta.glob("/src/content/mm12/*.md", { eager: true });
//       break;
//     case "mm13":
//       paths = import.meta.glob("/src/content/mm13/*.md", { eager: true });
//       break;
//     case "mm14":
//       paths = import.meta.glob("/src/content/mm14/*.md", { eager: true });
//       break;
//     case "mm15":
//       paths = import.meta.glob("/src/content/mm15/*.md", { eager: true });
//       break;
//     case "mm18":
//       paths = import.meta.glob("/src/content/mm18/*.md", { eager: true });
//       break;
//     case "mm19":
//       paths = import.meta.glob("/src/content/mm19/*.md", { eager: true });
//       break;
//     case "mm20":
//       paths = import.meta.glob("/src/content/mm20/*.md", { eager: true });
//       break;
//     case "mm25":
//       paths = import.meta.glob("/src/content/mm25/*.md", { eager: true });
//       break;
//     case "all":
//       paths = import.meta.glob("/src/content/*/*.md", { eager: true });
//       break;
//     default:
//       console.log("Essay not found.");
//   }
//   return paths;
// }
