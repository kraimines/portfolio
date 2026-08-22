# Demo Videos

Put portfolio demo videos in this folder.

Current filenames used by the site:

1. `zaitouna-demo.mp4` - Zaitouna Bank OCR & LLM project demo
2. `cns-demo.mp4` - CNS R Shiny dashboard demo

## Where To Add Files
- Copy new videos into `public/videos/`
- Reference them in `components/experience.tsx` with `/videos/<file-name>.mp4`
- The `public/` folder is the only place needed for static downloads and videos in Next.js

## CV Download
- Put your CV file at `public/cv.pdf`
- The hero button already points to `/cv.pdf`
- Keeping the filename exactly `cv.pdf` makes the download link work without extra config

## Recommended Format
- MP4 format
- 1280x720 or 1920x1080
- Keep the file size reasonable for fast loading
- Keep demos short and focused

## Optional External Hosting
- You can also host demos on YouTube or Vimeo
- If you do, replace the local `demoUrl` in `components/experience.tsx` with the external link
