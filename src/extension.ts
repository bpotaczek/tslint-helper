'use strict';

var shell = require('shelljs');
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "tslint-helper" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
        console.log(context);
        shell.echo('Testing');
        try {
            shell.cd(vscode.workspace.rootPath);
            var tslint = shell.exec('tslint \'src/app/**/*.ts\' -t json');
            var results = JSON.parse(tslint.stdout);
            // if (tslint.code !== 0) {
            //     shell.echo('Error running tslint');
            //     shell.exit(1);
            // } else {
            //     shell.echo('tslint ran successfully');
            // }
        } catch (ex) {
            console.log('Error', ex);
        }

        console.log('Finished');
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}