/**
 * 
 */
import { isbot } from "isbot";

/**
 * 
 */
import { PassThrough } from "stream";

/**
 * 
 */
import { renderToPipeableStream } from "react-dom/server";

/**
 * 
 */
import { RemixServer } from "@remix-run/react";

/**
 * 
 */
import { createReadableStreamFromReadable } from "@remix-run/node";

/**
 * 
 */
export default function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  /**
   * 
   */
  if (isbot(request.headers.get("User-Agent"))) {
    return handleBotRequest(request, responseStatusCode, responseHeaders, remixContext);
  }

  return handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}

/**
 * 
 */
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise(executer);

  /**
   * 
   */
  function executer(resolve, reject) {
    var shellRendered = false;

    const { pipe, abort } = renderToPipeableStream(<RemixServer context={remixContext} url={request.url} abortDelay={5000}></RemixServer>, {
      onAllReady() {
        shellRendered = true;

        const body = new PassThrough();

        const stream = createReadableStreamFromReadable(body);

        responseHeaders.set("Content-Type", "text/html");

        resolve(new Response(stream, { status: responseStatusCode, headers: responseHeaders }));

        pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        responseStatusCode = 500;

        /**
         * 
         */
        if (shellRendered) {
          console.error(error);
        }
      }
    });

    setTimeout(abort, 5000);
  }
}

/**
 * 
 */
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise(executer);

  /**
   * 
   */
  function executer(resolve, reject) {
    var shellRendered = false;

    const { pipe, abort } = renderToPipeableStream(<RemixServer context={remixContext} url={request.url} abortDelay={5000}></RemixServer>, {
      onAllReady() {
        shellRendered = true;

        const body = new PassThrough();

        const stream = createReadableStreamFromReadable(body);

        responseHeaders.set("Content-Type", "text/html");

        resolve(new Response(stream, { status: responseStatusCode, headers: responseHeaders }));

        pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        responseStatusCode = 500;

        /**
         * 
         */
        if (shellRendered) {
          console.error(error);
        }
      }
    });

    setTimeout(abort, 5000);
  }
}
