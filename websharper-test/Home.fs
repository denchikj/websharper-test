namespace websharper_test

open WebSharper

module Home =
    [<JavaScript>]
    type UserDTO =
        { FirstName: string
          LastName: string
          PhoneNumber: string
          Email: string }

    module Server =
        [<Rpc>]
        let FetchUsers () =
            let fetchUser () =
                let rnd = System.Random()

                let oneOf lst =
                    List.item (rnd.Next(0, List.length lst)) lst

                let firstName = oneOf [ "Denis"; "Roman"; "John"; "Nikita" ]
                let lastName = oneOf [ "Weston"; "Romanovish"; "Smith"; "Wolfram" ]
                let emailDomain = oneOf [ "gmail.com"; "mail.ru"; "yandex.ru" ]

                { FirstName = firstName
                  LastName = lastName
                  PhoneNumber = $"{rnd.Next(100, 1000)}-{rnd.Next(100, 1000)}-{rnd.Next(100, 10000)}"
                  Email = $"{firstName.ToLower()}.{lastName.ToLower()}.{rnd.Next(10, 100)}@{emailDomain}" }

            async {
                let users = [ for i in 1..9 -> fetchUser () ]
                return users
            }

    [<JavaScript>]
    module Client =
        open WebSharper.UI
        open WebSharper.UI.Client

        let UserTable () =
            let renderUserRow (user: UserDTO) =
                Templates
                    .MainTemplate
                    .UserRow()
                    .FirstName(user.FirstName)
                    .LastName(user.LastName)
                    .PhoneNumber(user.PhoneNumber)
                    .Email(user.Email)

            if IsClient then
                Templates
                    .MainTemplate
                    .UserTable()
                    .Rows(
                        async {
                            let! users = Server.FetchUsers()
                            return users |> List.map (fun user -> (renderUserRow user).Doc()) |> Doc.Concat
                        }
                        |> Doc.Async
                    )
                    .Doc()
            else
                Templates
                    .MainTemplate
                    .UserTable()
                    .Rows(
                        [ for i in 1..9 ->
                              { FirstName = "Denis"
                                LastName = "Weston"
                                PhoneNumber = "123-456-7890"
                                Email = "denwest@gmail.com" } ]
                        |> List.map (fun user -> (renderUserRow user).ExtraCSS("filter blue-sm").Doc())
                        |> Doc.Concat
                    )
                    .Doc()
