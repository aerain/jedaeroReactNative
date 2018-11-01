//
//  RCTHTTPRequestHandler+yourPatchName
//

#import "RCTBridgeModule.h"
#import "RCTHTTPRequestHandler.h"

@implementation RCTHTTPRequestHandler(yourPatchName)

- (void)URLSession:(NSURLSession *)session didReceiveChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential *credential))completionHandler
{
  completionHandler(NSURLSessionAuthChallengeUseCredential, [NSURLCredential credentialForTrust:challenge.protectionSpace.serverTrust]);
}
@end
